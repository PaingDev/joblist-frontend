
import { Button, DatePicker, Select, Row, Col, Form } from 'antd';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

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

import { useGetTradeListQuery } from '../../services/ViewOrderService'
import './SearchBar.css';
import moment from 'moment/moment';

const { RangePicker } = DatePicker;

const SearchBar = ({ handleTradeList }) => {
    const [resultCount, setResultCount] = useState(0);
    const [params, setParams] = useState();
    const initialValues = {
        status: "Waiting",
        period: "Transmission",
        fromTo: [moment(), moment()]
    };
    const { data } = useGetTradeListQuery({...params},{
        skip: !params,
      });
    const [form] = Form.useForm();

    useEffect(() => {
        if (data) {
            handleTradeList(data);
            setResultCount(data.length);
        } else {
            handleTradeList(null);
        }
    }, [data, handleTradeList]);

    const onFinish = (values) => {        
        let fromDate = values.fromTo[0].toISOString();
        let toDate = values.fromTo[1].toISOString();

        setParams({...values, fromDate, toDate});
    };



    return (
        <div className="search-bar">
            <Form form={form}  onFinish={onFinish} initialValues={initialValues}>
                <Row gutter={12}>
                    <Col span={7}>
                        <Row>
                            <span className="search-title">Search </span>
                        </Row>
                        <Row>
                            <span className="search-label">Search results: <span style={{ color: "var(--dark-text-color)" }}>{resultCount}</span></span>
                        </Row>
                    </Col>
                    <Col span={4} style={{ paddingRight: "4px" }}>
                        <Form.Item
                            name="period"
                            label="Peroid"
                            className='custom-form-item'>
                            <Select options={peroidList} style={{ width: "100%" }}>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={4} style={{ paddingRight: "4px" }}>
                        <Form.Item
                            name="status"
                            label="Status"
                            className='custom-form-item'>
                            <Select options={statusList} style={{ width: "100%" }}>
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
                        <Form.Item>
                            <Button type="primary" shape="round" htmlType='submit' >Search</Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};
SearchBar.propTypes = {
    handleTradeList: PropTypes.func.isRequired,
};

export default SearchBar;