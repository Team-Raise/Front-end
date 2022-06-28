import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal'
import {Button} from "@restart/ui";
import {Col, Container, Row} from "react-bootstrap";
import classNames from "classnames/bind"
import style from '../../styles/table.module.scss'
import useSWR from "swr";
import fetcher from "../../utils/fetcher";
import Loading from "./Loading";

const cs = classNames.bind(style)

function MydModalWithGrid(props: any) {
  const {data, error} = useSWR('/api/fetchAllData', fetcher)

  if (error) {
    return <div>error</div>
  } else if (!data) {
    return <Loading/>
  } else {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            작물 데이터 확인
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <table className={cs('mainTable')} style={{width: '100%', marginTop: '2rem', maxWidth: '70rem'}}>
              <thead>
              <tr className={cs('table_tr')}>
                <th>습도</th>
                <th>온도</th>
                <th>토양수위</th>
                <th>pH</th>
                <th className={cs('dateInput')}>입력받은 시각</th>
              </tr>
              </thead>
              <tbody>
              {Object.values(data.fetchData).map((log: any) => (
                <tr key={1}>
                  <td className={cs('humi')}>{log.humidity}%</td>
                  <td className={cs('temp')}>{log.temperature}</td>
                  <td className={cs('waterLevel')}>{log.water_level}</td>
                  <td className={cs('ph')}>{log.ph}</td>
                  <td className={cs('date')}>{log.date}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className={cs('closeBtn')}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

const FancyModal = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);

  return (
      <>
        <Button onClick={() => setModalShow(true)} className={cs('openBtn')}>
          모든 데이터 보기
        </Button>

        <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
      </>
  );
}

export default FancyModal