import React, { useEffect } from 'react';
import { useState } from 'react';
import './Intro.css';
import Logo from '../../img/logo.jpg';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import SelectOS from './SelectOS';
import './styles/SelectDevice.css';
import { useRecoilState } from 'recoil';
import { tempDeviceVar, tempIssueArrayVar, tempOsVar } from '../../atoms/Selections';

function WindowsIssue() {
    const navigate = useNavigate();

    const [os, setOs] = useRecoilState(tempOsVar);
    const [selectdevice, setSelectDevice] = useRecoilState(tempDeviceVar);
    const [issuelist, setIssueList] = useRecoilState(tempIssueArrayVar);


    const [keyword, setKeyword] = useState('');
    const [showlist, setShowList] = useState(false);
    // console.log(selectdevice)
    useEffect(() => {
        if (os == null || selectdevice == null) {
            navigate('/');
        }
    }, [])


    const searchvalue = (e) => {
        setKeyword(e);
    }



    const Issue = [
        { name: 'Windows Issue 1', id: 1 },
        { name: 'Windows Issue 2', id: 2 },
        { name: 'Windows Issue 3', id: 3 },
        { name: 'Windows Issue 4', id: 4 },
        { name: 'Windows Issue 5', id: 5 },
        { name: 'Windows Issue 6', id: 6 },
        { name: 'Windows Issue 7', id: 7 },
        { name: 'Windows Issue 8', id: 8 },
        { name: 'Windows Issue 9', id: 9 },
        { name: 'Windows Issue 10', id: 10 },
        { name: 'Windows Issue 11', id: 11 },
        { name: 'Windows Issue 12', id: 12 },
        { name: 'Windows Issue 13', id: 13 },
        { name: 'Windows Issue 14', id: 14 },
        { name: 'Windows Issue 15', id: 15 },
        { name: 'Windows Issue 16', id: 16 },
        { name: 'Windows Issue 17', id: 17 },
        { name: 'Windows Issue 18', id: 18 },
        { name: 'Windows Issue 19', id: 19 },
        { name: 'Windows Issue 20', id: 20 }
    ]


    const AddRemoveIssue = (e) => {

        if (issuelist.includes(e)) {
            setIssueList(issuelist.filter(item => item !== e));
        }
        else {
            setIssueList([...issuelist, e]);
        }
    }
    // console.log(issuelist)
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="i-text">
                    <span>Lifetime Warranty . Lowest Price</span>
                    <span>India's Highest Rated Android</span>
                    <span>Repairs at your doorstep</span>
                    <span>PROFESSIONAL Windows TECHNICIANS</span>
                    <span>Most trusted Windows repair service in Jabalpur</span>
                </div>
            </div>
            <div className="i-right">
                {/* <SelectOS /> */}
                <div className="devices-cont">
                    Showing {selectdevice} Issues
                    <div className="input-cont">
                        <input placeholder={`Select ${os} Issue`} onChange={(e) => searchvalue(e.target.value)} onClick={() => setShowList(true)} />
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                    {showlist == true ?
                        <div className='devices-list'>
                            {Issue
                                .filter(issue => issue.name.toLowerCase().includes(keyword.toLowerCase()))
                                .map(issue => (
                                    <div className={`device-item ${issuelist.includes(issue.name) && 'device-item-active'}`} key={issue.id} onClick={() => AddRemoveIssue(issue.name)}>
                                        <p>{issue.name}</p>
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


                    {issuelist != '' ?
                        <button className='nextbtnactive'>
                            <span> Next</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
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

export default WindowsIssue