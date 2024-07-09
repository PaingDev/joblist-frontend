
import { Button, DatePicker, Select, Row, Col, Form } from 'antd';
import { useState } from 'react';
const peroidList = [
    {
        "value": "Transmission",
        "label": "Transmission"
    }
];
const statusList = [
    {
        "value": "Waiting",
        "label": "Waiting"
    }
];

import './SearchBar.css';

const { RangePicker } = DatePicker;

const SearchBar = () => {
    const [resultCount, setResultCount] = useState(123);


    return (
        <div className="search-bar">
            <Row gutter={12}>
                <Col span={7}>
                    <Row>
                        <span className="search-title">Search </span>
                    </Row>
                    <Row>
                        <span className="search-label">Search results: <span style={{color: "var(--dark-text-color)"}}>{resultCount}</span></span>
                    </Row>
                </Col>
                <Col span={4} style={{paddingRight: "4px"}}>
                    <Form.Item
                        name="perioid"
                        label="Peroid"                        
                        className='custom-form-item'>
                        <Select defaultValue="Transmission" options={peroidList} style={{ width: "100%" }}>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={4} style={{paddingRight: "4px"}}>
                    <Form.Item
                        name="Status"
                        label="Status"
                        className='custom-form-item'>
                        <Select defaultValue="Waiting" options={statusList} style={{ width: "100%" }}>
                        </Select>
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item
                        name="fromTo"
                        label="Date"
                        className='custom-form-item'>
                    <RangePicker />
                    </Form.Item>
                </Col>
                <Col>
                    <Button type="primary" shape="round">Search</Button>
                </Col>
            </Row>
        </div>
    );
};

export default SearchBar;