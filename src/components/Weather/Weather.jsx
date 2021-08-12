import React from 'react';
import { Row, Col, Radio, Button, Card } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import dateFormat from 'dateformat';
import { useSelector, useDispatch } from 'react-redux';
import { next, prev } from '../../actions';

import 'antd/dist/antd.css';
import './Weather.scss';

function Weather(props) {

  const cards = useSelector(state => state.cards);
  const dispatch = useDispatch();

  const handlePrev = () => {
    if (cards > 0) {
      dispatch(prev(8));
    }
  }

  const handleNext = () => {
    if (props.items.list.length >= (cards + 8)) {
      dispatch(next(8));
    }
  }

  const [value, setValue] = React.useState(1);
  const [temp, setTemp] = React.useState(props.items.list[0].main.temp);
  const onChange = e => {
    setValue(e.target.value);
    if (e.target.value === 2) {
      setTemp(Number((props.items.list[cards].main.temp - 32) * 5/9).toFixed(2));
    }
    if (e.target.value === 1) {
      setTemp(props.items.list[cards].main.temp);
    }
  };

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
            <ArrowLeftOutlined /><Button type="text" onClick={handlePrev}>Previous Day</Button>
          </div>
        </Col>
        <Col span={12}>
          <div>
            <Button type="text" onClick={handleNext}>Next Day</Button><ArrowRightOutlined />
          </div>
        </Col>
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col>
          <Card title={'Date: ' + dateFormat(props.items.list[cards].dt_txt, "d mmmm yy")}>
            {'Temp: ' + temp}
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Weather;