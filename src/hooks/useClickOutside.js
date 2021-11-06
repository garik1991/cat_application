import {useEffect} from "react";

const useClickOutside = (ref, refToHide, setShow) => {
    useEffect(() => {
        window.addEventListener('mouseup',function(event){
            if(event.target !== ref.current && event.target.parentNode !== ref.current && event.target !== refToHide.current && event.target.parentNode !== refToHide.current){
                if(refToHide.current.classList.contains("show")){
                    refToHide.current.classList.remove("show");
                    setShow(false)
                }
            }
        });
    }, [ref, refToHide, setShow])
}

export default useClickOutside