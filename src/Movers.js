import React from 'react'
import MOVER from './Images/movers.png'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Typography from '@material-ui/core/Typography';
import { ButtonBase } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

// Flexible schedule
// Easily find ajob (lot of jobs)
// Trusted employers

export default class Movers extends React.Component {

    state = {
        logo_width: 180,
        logo_height: 55,
        type: 'row'
    }

    constructor(props) {
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        if (window.innerWidth < 750) {
            this.setState({ type: 'column', logo_width: 180, logo_height: 55, width: window.innerWidth, height: window.innerHeight });
        } else {
            this.setState({ type: 'row', logo_width: 180, logo_height: 55, width: window.innerWidth, height: window.innerHeight });
        }
    }

    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <div style={{ minHeight: '75vh', width: '100vw', display: 'flex', alignItems: 'center', left: 0, position: 'relative', backgroundImage: 'url(' + MOVER + ')', backgroundPosition: 'center', backgroundSize: 'cover', flexDirection: "column", marginTop: '8vh', justifyContent: 'center' }}>
                    <div style={{ width: this.state.type === "column" ? '90vw' : '70vw', display: 'flex', alignItems: 'center', flexDirection: this.state.type, justifyContent: 'center' }} >
                        <div style={{ display: 'flex', flex: 7, alignItems: 'center', flexDirection: 'column', minHeight: '30vh', justifyContent: 'space-evenly' }}>
                            <h1 style={{ textAlign: 'center', margin: 7, fontSize: this.state.type === 'column' ? 40 : 60, fontWeight: '600' }}>Mover<b style={{ color: 'orange', fontWeight: '600' }}>Up</b> <br />Jobs for movers!</h1>
                            <h3 style={{ textAlign: 'center', fontWeight: 'normal', margin: 7, fontSize: this.state.type === 'column' ? 20 : 25, }}>
                                You can be your own boss and enjoy the flexibility of choosing when, where, and how much you earn. All you need is a smartphone to start making money.<br /> It’s that simple.
                            </h3>
                        </div>
                        <div style={{ flex: 3 }}>
                            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-around' }}>
                                <h3 style={{ textAlign: 'center', margin: 7, marginBottom: 0, fontSize: 30, fontWeight: '600' }}>App for movers</h3>
                                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', minHeight: '15vh', justifyContent: 'space-around' }}>
                                    <ButtonBase style={{ outline: 'none', margin: 7 }} onClick={() => window.open("https://play.google.com/store/apps/details?id=com.moverup.formovers")}>
                                        <img alt="MoverUp" src={require('./Images/apple_logo.png')} style={{ width: this.state.logo_width, height: this.state.logo_height }} />
                                    </ButtonBase>
                                    <ButtonBase style={{ outline: 'none', margin: 7 }} onClick={() => window.open("https://testflight.apple.com/join/lue7aG4i")}>
                                        <img alt="MoverUp" src={require('./Images/android_logo.png')} style={{ width: this.state.logo_width, height: this.state.logo_height }} />
                                    </ButtonBase>
                                </div>
                                <NavLink
                                    to="/business"
                                    onClick={() => this.props.changePage("For business")}
                                    style={{
                                        color: "black"
                                    }}
                                >
                                    Are you a business ?
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ minHeight: '35vh', width: '100vw', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid lightgray', paddingBottom: 50 }}>
                    <div style={{ maxWidth: 960, display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 7 }}>
                        <div style={{ padding: 20, marginTop: 20 }}>
                            <h1 style={{ textAlign: 'center', fontWeight: '600', fontSize: this.state.type === 'column' ? 40 : 60 }}>
                                Why use us?
                            </h1>
                        </div>
                        <div style={{ height: 5, width: 80, backgroundColor: 'orange', marginBottom: 50, marginTop: 10 }} />
                        {
                            this.state.type === 'column' ?
                                <div style={{ minHeight: '35vh', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', flex: 1, alignItems: 'center', width: '100%', flexDirection: 'column', margin: 5 }}>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img alt="MoverUp" src={require('./Images/schedule.png')} style={{ width: 60, height: 60, aspectRatio: 6 / 6 }} /></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h3 style={{ textAlign: 'center' }}>Stay flexible</h3></div>
                                        <div style={{ flex: 2, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 10, paddingTop: 0 }}><p style={{ textAlign: 'center' }}><Typography style={{ textAlign: 'flex-start', marginTop: 10, color: 'gray', fontWeight: '300' }}>Choose your own hours and enjoy the freedom of working from anywhere: near home or in a city you're just visiting.</Typography></p></div>
                                    </div>
                                    <div style={{ display: 'flex', flex: 1, alignItems: 'center', width: '100%', flexDirection: 'column', margin: 5 }}>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img alt="MoverUp" src={require('./Images/easy_to_use.png')} style={{ width: 50, height: 50, aspectRatio: 6 / 6 }} /></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h3 style={{ textAlign: 'center' }}>Easy to get started</h3></div>
                                        <div style={{ flex: 2, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 10, paddingTop: 0 }}><p style={{ textAlign: 'center' }}><Typography style={{ textAlign: 'flex-start', marginTop: 10, color: 'gray', fontWeight: '300' }}>Just sign up with your name, email and phone number and get access to all available jobs around you.</Typography></p></div>
                                    </div>
                                    <div style={{ display: 'flex', flex: 1, alignItems: 'center', width: '100%', flexDirection: 'column', margin: 5 }}>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img alt="MoverUp" src={require('./Images/cash.png')} style={{ width: 60, height: 60, aspectRatio: 6 / 6 }} /></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h3 style={{ textAlign: 'center' }}>Achieve your goals</h3></div>
                                        <div style={{ flex: 2, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 10, paddingTop: 0 }}><p style={{ textAlign: 'center' }}><Typography style={{ textAlign: 'flex-start', marginTop: 10, color: 'gray', fontWeight: '300' }}>Earn extra money for your goals. Hundreds of businesses are hiring thousands of workers every day. We will find the perfect match just for you.</Typography></p></div>
                                    </div>
                                </div>
                                :
                                <React.Fragment>
                                    <div style={{ display: 'flex', flex: 1, alignItems: 'center', margin: 5, width: '100%' }}>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img alt="MoverUp" src={require('./Images/schedule.png')} style={{ width: 60, height: 60, aspectRatio: 6 / 6 }} /></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img alt="MoverUp" src={require('./Images/easy_to_use.png')} style={{ width: 50, height: 50, aspectRatio: 6 / 6 }} /></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img alt="MoverUp" src={require('./Images/cash.png')} style={{ width: 60, height: 60, aspectRatio: 6 / 6 }} /></div>
                                    </div>
                                    <div style={{ display: 'flex', flex: 1, alignItems: 'center', margin: 5, width: '100%' }}>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h3 style={{ textAlign: 'center' }}>Stay flexible</h3></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h3 style={{ textAlign: 'center' }}>Easy to get started</h3></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h3 style={{ textAlign: 'center' }}>Achieve your goals</h3></div>
                                    </div>
                                    <div style={{ display: 'flex', flex: 1, alignItems: 'flex-start', margin: 5, width: '100%' }}>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 10, paddingTop: 0 }}><p style={{ textAlign: 'center' }}><Typography style={{ textAlign: 'flex-start', marginTop: 10, color: 'gray', fontWeight: '300' }}>Choose your own hours and enjoy the freedom of working from anywhere: near home or in a city you're just visiting.</Typography></p></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 10, paddingTop: 0 }}><p style={{ textAlign: 'center' }}><Typography style={{ textAlign: 'flex-start', marginTop: 10, color: 'gray', fontWeight: '300' }}>Just sign up with your name, email and phone number and get access to all available jobs around you.</Typography></p></div>
                                        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 10, paddingTop: 0 }}><p style={{ textAlign: 'center' }}><Typography style={{ textAlign: 'flex-start', marginTop: 10, color: 'gray', fontWeight: '300' }}>Earn extra money for your goals. Hundreds of businesses are hiring thousands of workers every day. We will find the perfect match just for you.</Typography></p></div>
                                    </div>
                                </React.Fragment>
                        }
                    </div>
                </div>
                <div style={{ width: '100vw', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '99vw', alignItems: 'center', justifyContent: 'center', marginBottom: 60 }}>
                        <Stepper orientation="vertical" activeStep={null} connector={null} style={{ width: '98vw', alignItems: 'center', display: 'flex', justifyContent: 'space-evenly' }}>
                            <div style={{ padding: 20, marginTop: 20 }}>
                                <h1 style={{ textAlign: 'center', fontWeight: '600', fontSize: this.state.type === 'column' ? 40 : 60 }}>
                                    How it works:
                                </h1>
                                <Typography style={{ textAlign: 'center', color: 'gray', fontWeight: '300' }}>
                                    3 simple steps to start earning money
                                </Typography>
                            </div>
                            <div style={{ height: 5, width: 80, backgroundColor: 'orange', marginBottom: 50, marginTop: 10 }} />
                            <Step key={0} active={true} style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', margin: 20, width: this.state.type === "column" ? '92vw' : 560 }}>
                                <div style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                                    <StepLabel StepIconComponent={() => Comp({ number: 1 })}>
                                    </StepLabel>
                                    <h3>Create your schedule</h3>
                                </div>
                                <Typography style={{ textAlign: 'flex-start', marginTop: 10, color: 'gray', fontWeight: '300' }}>
                                    Decide when and where you want to work, and we will match you with companies that need you.
                                </Typography>
                                <div style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', padding: 10, alignSelf: 'center' }}>
                                    <img alt="MoverUp" src={require('./Images/add_slot.png')} style={{ width: this.state.type === "column" ? 180 : 270, height: this.state.type === "column" ? 360 : 540, margin: 7 }} />
                                    <img alt="MoverUp" src={require('./Images/empty_calendar.png')} style={{ width: this.state.type === "column" ? 180 : 270, height: this.state.type === "column" ? 360 : 540, margin: 7 }} />
                                </div>
                            </Step>
                            <Step key={1} active={true} style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', margin: 20, width: this.state.type === "column" ? '92vw' : 560 }}>
                                <div style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                                    <StepLabel StepIconComponent={() => Comp({ number: 2 })}>
                                    </StepLabel>
                                    <h3>Choose the job you want and go to work</h3>
                                </div>
                                <Typography style={{ textAlign: 'flex-start', marginTop: 10, color: 'gray', fontWeight: '300' }}>
                                    We will match you with several companies, and you can choose the job that fits you best.
                                </Typography>
                                <div style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', padding: 10, alignSelf: 'center' }}>
                                    <img alt="MoverUp" src={require('./Images/list_with_requests.png')} style={{ width: this.state.type === "column" ? 180 : 270, height: this.state.type === "column" ? 360 : 540, margin: 7 }} />
                                    <img alt="MoverUp" src={require('./Images/confirm_job.png')} style={{ width: this.state.type === "column" ? 180 : 270, height: this.state.type === "column" ? 360 : 540, margin: 7 }} />
                                </div>
                            </Step>
                            <Step key={2} active={true} style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', margin: 20, width: this.state.type === "column" ? '92vw' : 560 }}>
                                <div style={{ flexDirection: 'row', alignItems: 'center', display: 'flex' }}>
                                    <StepLabel StepIconComponent={() => Comp({ number: 3 })}>
                                    </StepLabel>
                                    <h3>Leave a rating and get paid</h3>
                                </div>
                                <Typography style={{ textAlign: 'flex-start', marginTop: 10, color: 'gray', fontWeight: '300' }}>
                                    Tell us about your experience working with the company, so we can find an even better match next time you use us.
                                </Typography>
                            </Step>
                        </Stepper>
                    </div>
                </div>
            </React.Fragment>
        )

        function Comp(props) {
            return (
                <div style={{ width: 40, height: 40, borderRadius: 25, backgroundColor: '#505fb4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <b style={{ color: 'white', fontSize: 16, fontWeight: 'normal' }}>{props.number}</b>
                </div>
            )
        }
    }

}
