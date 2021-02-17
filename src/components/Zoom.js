import React, { Component } from 'react'
const zoom = require('@zoomus/websdk')

const signature = "MHV4VHBUU0VSbm1BZkxlOE41YS1ldy45OTI4MDMyMDg0OC4xNjEzNTgwNjc4NjkzLjAuamxPcVlsVDhyeHBsVTZWTXdkK1AvaTJ0WHJKQUJVSG5hTUhkbUg2eXJBRT0="

export default class Zoom extends Component {

    componentDidMount() {
        zoom.ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.0/lib', '/av');
        zoom.ZoomMtg.preLoadWasm()
        zoom.ZoomMtg.prepareJssdk()
    }




    launchMeeting = () => {
        // change state of meeting
        // this.setState({ meetingLaunched: !this.state.meetingLaunched })
        const meetConfig = {
            apiKey: '0uxTpTSERnmAfLe8N5a-ew',
            meetingNumber: 91396987690,
            leaveUrl: 'http://192.168.1.39:3000',
            userName: 'mahir Dhall',
            userEmail: 'mahirdhall4@gmail.com',
            role: 0 // 1 for host; 0 for attendee
        };
        // generateSignature should only be used in development
        zoom.ZoomMtg.generateSignature({
            meetingNumber: meetConfig.meetingNumber,
            apiKey: meetConfig.apiKey,
            apiSecret: meetConfig.apiSecret,
            role: meetConfig.role,
            success(res) {
                console.log('signature', res.result);
                zoom.ZoomMtg.init({
                    leaveUrl: 'http://www.zoom.us',
                    success() {
                        zoom.ZoomMtg.join(
                            {
                                meetingNumber: meetConfig.meetingNumber,
                                userName: meetConfig.userName,
                                signature: res.result,
                                apiKey: meetConfig.apiKey,
                                userEmail: 'mahirdhll4@gmail.com',
                                success() {
                                    console.log('join meeting success');
                                },
                                error(res) {
                                    console.log(res);
                                }
                            }
                        );
                    },
                    error(res) {
                        console.log(res);
                    }
                });
            }
        });
    }
    join_meeting = () => {
        
        
        const meetConfig = {
            apiKey: '0uxTpTSERnmAfLe8N5a-ew',
            meetingNumber: 99280320848,
            leaveUrl: 'http://192.168.1.39:3000',
            userName: 'mahir Dhall',
            userEmail: 'mahirdhall4@gmail.com',
            role: 0 // 1 for host; 0 for attendee
        };

        zoom.ZoomMtg.init({
            debug: true, //optional
            leaveUrl: 'http://www.zoom.us', //required
            showMeetingHeader: true, //option
            disableInvite: false, //optional
            disableCallOut: false, //optional
            disableRecord: false, //optional
            disableJoinAudio: false, //optional
            audioPanelAlwaysOpen: true, //optional
            showPureSharingContent: false, //optional
            isSupportAV: true, //optional,
            isSupportChat: true, //optional,
            isSupportQA: true, //optional,
            isSupportPolling: true, //optional
            isSupportBreakout: true, //optional
            isSupportCC: true, //optional,
            screenShare: true, //optional,
            rwcBackup: '', //optional,
            videoDrag: true, //optional,
            sharingMode: 'both', //optional,
            videoHeader: true, //optional,
            isLockBottom: true, // optional,
            isSupportNonverbal: true, // optional,
            isShowJoiningErrorDialog: true, // optional,
            inviteUrlFormat: '', // optional
            loginWindow: {  // optional,
                width: 400,
                height: 380
            },
            success: function () {
                zoom.ZoomMtg.join({
                    signature: signature,
                    meetingNumber: meetConfig.meetingNumber,
                    userName: meetConfig.userName,
                    apiKey: meetConfig.apiKey,
                    userEmail: meetConfig.userEmail,
                    success: (success) => {
                        console.log(success)
                    },
                    error: (error) => {
                        console.log(error)
                    }
                })
            }
        })
      
    }
    render() {
        return (
            <div>
                <button onClick={this.join_meeting}>
                    Join a meeting
                </button>
            </div>
        )
    }
}
