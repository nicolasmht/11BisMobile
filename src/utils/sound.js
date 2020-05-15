import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import Sound from 'react-native-sound'

const AudioStatePlay = "play"
const AudioStatePause = "pause"
const AudioStateStop = "stop"

export default class SoundPlayer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: this.props.visible,
            isPlaying: false,
            progress: 0,
        }
        this.duration = 1
        this.audioState = ""
        this.enable = true
    }

    componentWillUnmount() {
        this.clearTimer()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible) {
            this.setState({ isPlaying: true, ...nextProps })
            this.play()
        } else {
            this.setState(nextProps)
        }
    }

    showModal(visible) {
        if (!visible) {
            this.stop()
        }
        this.setState({ visible: visible })
    }

    changePlayState() {
        if (!this.enable) return
        if (this.state.isPlaying) {
            this.setState({ isPlaying: false })
            this.pause()
        } else {
            this.setState({ isPlaying: true })
            this.play()
        }
        this.enable = false
        setTimeout(() => {
            this.enable = true
        }, 500)
    }

    play() {
        if (this.whoosh && !this.state.isPlaying) {
            this.whoosh.getCurrentTime((seconds) => {
                this.whoosh.setCurrentTime(seconds)
                this.whoosh.play((success) => {
                    if (success) {
                        this.stop()
                    }
                })
                this.audioState = AudioStatePlay
                this.playProgress()
            })
            return
        }
        this.whoosh = new Sound(this.props.source, null, (error) => {
            if (!error) {
                this.duration = this.whoosh.getDuration()
                this.whoosh.play((success) => {
                    if (success) {
                        this.stop()
                    }
                })
                this.audioState = AudioStatePlay
                this.playProgress()
            }
        })
    }

    pause() {
        this.audioState = AudioStatePause
        if (!this.whoosh) return
        this.whoosh.pause()
        this.clearTimer()
    }

    stop() {
        this.audioState = AudioStateStop
        if (!this.whoosh) return
        this.whoosh.stop()
        this.whoosh.release()
        this.whoosh = null
        this.clearTimer()
        this.setState({ isPlaying: false })
    }

    playProgress() {
        this.timer = setInterval(() => {
            this.whoosh.getCurrentTime((seconds) => {
                if (this.duration >= seconds && this.audioState === AudioStatePlay) {
                    this.setState({ progress: seconds })
                } else if (this.audioState === AudioStateStop) {
                    this.setState({ progress: 0 })
                }
            })
        }, 0)
    }

    clearTimer() {
        if (this.timer) {
            clearInterval(this.timer)
            this.timer = null
        }
    }

    render() {
        return (
            <Modal
                animationType={"none"}
                transparent={true}
                visible={this.state.visible}
                onRequestClose={() => this.showModal(false)} >
                <View>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => null} />
                    <View>
                        <Text>{this.state.progress + "/" + this.duration}</Text>
                        <View>
                            <Text>{this.state.progress / this.duration}</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.changePlayState()}>
                            <Text>{this.state.isPlaying ? 'Stop' : 'Play'}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => null} />
                </View>
            </Modal>
        )
    }
}
