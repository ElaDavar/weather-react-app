import React, { useState, useEffect } from 'react';
import { Row, Col, Radio, Button, Card } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './info.css';

function Info() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getList() {
      try {
        let response = await fetch("http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40");
        response = await response.json();
        setIsLoaded(true);
        setItems(response);
        console.log('items ', items);
      } catch (error) {
        setIsLoaded(true);
        setError(error);
      }
    }

    getList();
  }, []);

  const [value, setValue] = React.useState(1);

  const onChange = e => {
    setValue(e.target.value);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Radio.Group onChange={onChange} value={value}>
            <Col span={24}>
              <div>
                <Radio value={2}>Celsius</Radio>
                <Radio value={1}>Fahrenheit</Radio>
              </div>
            </Col>
          </Radio.Group>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={12}>
            <div>
              <ArrowLeftOutlined /><Button type="text">Previous Day</Button>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <Button type="text">Next Day</Button><ArrowRightOutlined />
            </div>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col>
            <Card title="Card title">
              Card content
            </Card>
          </Col>
          <Col>
            <Card title="Card title">
              Card content
            </Card>
          </Col>
          <Col>
            <Card title="Card title">
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    )
  }

}

export default Info;