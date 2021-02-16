import React, { Component } from 'react'
const zoom = require('@zoomus/websdk')
zoom.ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.0/lib', '/av');
zoom.ZoomMtg.preLoadWasm()
zoom.ZoomMtg.prepareJssdk()
const signature = "MHV4VHBUU0VSbm1BZkxlOE41YS1ldy45NjQ1OTAzNDI2NC4xNjEzNTA5MDE4ODQ4LjAuRHFMdVVmdFpFMDkxOGRRNmhFbTMwSzRaRURtUHA2dk5icThSZS9valltYz0="

export default class Zoom extends Component {


    join_meeting = () => {
        
        
        const meetConfig = {
            apiKey: '0uxTpTSERnmAfLe8N5a-ew',
            meetingNumber: 96459034264,
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
