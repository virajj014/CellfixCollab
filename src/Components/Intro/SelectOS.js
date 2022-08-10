import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil'
import { tempOsVar } from '../../atoms/Selections';
import './styles/SelectOS.css'

const SelectOS = () => {
    const [os, setOs] = useRecoilState(tempOsVar);
    // console.log(os);
    const navigate = useNavigate();

    const handleOs = (e) => {
        if (os == 'Android') {
            console.log('Android page');
            navigate('/android-devices');
        }
        else if (os == 'IOS') {
            console.log('IOS page');
            navigate('/ios-devices');
        }
        else if (os == 'Windows') {
            console.log('Windows page');
            navigate('/windows-devices');
        }
    }
    return (
        <div className='select-os-outer'>
            <h1>Select your device to get started now!</h1>
            <div className="select-os-inner">
                <button onClick={() => setOs('Android')} className={os === 'Android' ? 'osactive' : 'osinactive'}>Android</button>
                <button onClick={() => setOs("IOS")} className={os === 'IOS' ? 'osactive' : 'osinactive'}>IOS</button>
                <button onClick={() => setOs('Windows')} className={os === 'Windows' ? 'osactive' : 'osinactive'}>Windows</button>
            </div>
            {os == 'Android' || os == 'IOS' || os == 'Windows' ?
                <button className='nextbtnactive' onClick={handleOs}>
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
    )
}

export default SelectOS