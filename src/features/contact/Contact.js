import React, {useCallback, useRef} from "react"
import './Contact.css'

export const Contact = () => {
    console.log('re-render Contact')
    const nameRef = useRef()
    const handleContact = useCallback((e) => {
        e.preventDefault()
        console.log(nameRef.current.value)
        nameRef.current.value = ''
    },[])
    return(
        <div className={'contact'}>
            <form className={'contact__form'}>
                <input type={'text'}
                       className={'contact__input'}
                       ref={nameRef}
                />
                <button
                    onClick={handleContact}
                >Contact</button>
            </form>
        </div>
    )
}