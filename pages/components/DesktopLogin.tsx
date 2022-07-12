import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal'
import {Button} from "@restart/ui";
import {Col, Container, Row} from "react-bootstrap";
import classNames from "classnames/bind"
import styles from "../../styles/index.module.scss"
import {useRouter} from "next/router";

const cs = classNames.bind(styles)

function MydModalWithGrid(props: any) {
  const router = useRouter()
  const [ID, setId] = useState<string>('')
  const [Password, setPassword] = useState<string>('')

  const login = async() => {
    const res = await fetch('/api/LoginAPI', {
      method: 'post',
      body: JSON.stringify({
        ID,
        Password
      })
    }).then((res) => res.json())
    if(res.success) {
      window.localStorage.setItem('idAdmin', 'true')
      //router.push('/Desktop/Admin')
    } else {
      alert("Wrong ID or Password")
      setId("")
      setPassword("")
    }
  }

  console.log(window.localStorage.getItem('idAdmin'))

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <input onChange={(e:any) => setId(e.target.value)} className='inputId' placeholder={'ID'} value={ID}/> <br/>
          <input type={"password"} onChange={(e:any) => setPassword(e.target.value)} className='inputPassword' placeholder={'Password'} value={Password}/>
          <button onClick={login} className="loginBtn">로그인</button>

        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className={cs('closeBtn')}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

const DesktopLogin = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setModalShow(true)} className={cs('adminBtn', 'button')}>
        관리자로 시작
      </Button>

      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  );
}

export default DesktopLogin