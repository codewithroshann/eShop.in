import React from 'react'
import { useSelector } from 'react-redux'

const Alert = () => {
  const alert = useSelector(state => state.alert)

  return (
    <>
      {alert.visible == true ? <div className={`alert alert-${alert.type} alert-dismissible mx-3 fade show`} style={{ position: "sticky",top:"50px", zIndex: "7" }} role="alert">
        <strong>Notification...!</strong> {alert.message}
        
      </div> : ""}
    </>
  )
}

export default Alert
