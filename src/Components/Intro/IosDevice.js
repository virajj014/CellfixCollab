import React, { useEffect } from 'react';
import { useState } from 'react';
import './Intro.css';
import Logo from '../../img/logo.jpg';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import SelectOS from './SelectOS';
import './styles/SelectDevice.css';
import { useRecoilState } from 'recoil';
import { tempDeviceVar, tempOsVar } from '../../atoms/Selections';

function IOSDevices() {
    const navigate = useNavigate();

    const [os, setOs] = useRecoilState(tempOsVar);
    const [selectdevice, setSelectDevice] = useRecoilState(tempDeviceVar);
    const [keyword, setKeyword] = useState('');
    const [showlist, setShowList] = useState(false);
    // console.log(selectdevice)
    useEffect(() => {
        if (os == 'None' || os == null) {
            navigate('/');
        }
    }, [])


    const searchvalue = (e) => {
        setKeyword(e);
    }



    const devices = [
        { name: 'IOS Device 1', id: 1 },
        { name: 'IOS Device 2', id: 2 },
        { name: 'IOS Device 3', id: 3 },
        { name: 'IOS Device 4', id: 4 },
        { name: 'IOS Device 5', id: 5 },
        { name: 'IOS Device 6', id: 6 },
        { name: 'IOS Device 7', id: 7 },
        { name: 'IOS Device 8', id: 8 },
        { name: 'IOS Device 9', id: 9 },
        { name: 'IOS Device 10', id: 10 },
        { name: 'IOS Device 11', id: 11 },
        { name: 'IOS Device 12', id: 12 },
        { name: 'IOS Device 13', id: 13 },
        { name: 'IOS Device 14', id: 14 },
        { name: 'IOS Device 15', id: 15 },
        { name: 'IOS Device 16', id: 16 },
        { name: 'IOS Device 17', id: 17 },
        { name: 'IOS Device 18', id: 18 },
        { name: 'IOS Device 19', id: 19 },
        { name: 'IOS Device 20', id: 20 }
    ]
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="i-text">
                    <span>Lifetime Warranty . Lowest Price</span>
                    <span>India's Highest Rated IOS</span>
                    <span>Repairs at your doorstep</span>
                    <span>PROFESSIONAL IOS TECHNICIANS</span>
                    <span>Most trusted IOS repair service in Jabalpur</span>
                </div>
            </div>
            <div className="i-right">
                {/* <SelectOS /> */}
                <div className="devices-cont">
                    Showing {os} devices
                    <div className="input-cont">
                        <input placeholder={`Select ${os} Device`} onChange={(e) => searchvalue(e.target.value)} onClick={() => setShowList(true)} />
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                    {showlist == true ?
                        <div className='devices-list'>
                            {devices
                                .filter(device => device.name.toLowerCase().includes(keyword.toLowerCase()))
                                .map(device => (
                                    <div className={`device-item ${selectdevice == device.name && "device-item-active"}`} key={device.id} onClick={() => setSelectDevice(device.name)}>
                                        <p>{device.name}</p>
                                        <button>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}

                        </div>
                        :
                        <></>}



                    {selectdevice != null ?
                        <Link to={'/ios-issue'} style={{ textDecoration: 'none' }}>
                            <button className='nextbtnactive' >
                                <span> Next</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </Link>
                        : <button className='nextbtninactive'>
                            <span> Next</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>}
                </div>
            </div>
        </div>
    )
}

export default IOSDevices