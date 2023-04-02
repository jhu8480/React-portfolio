import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/Resume.css'

function Resume() {
  return (
      <VerticalTimeline lineColor='#2d3439'>
        <VerticalTimelineElement iconStyle={{background: '#2d3439', color: '#fff'}}>
        <a className='download-link' href={process.env.PUBLIC_URL + '/Jinhui_Hu_Resume_w.pdf'} download>Download my resume</a>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2010 - 2014' iconStyle={{background: '#2d3439', color: '#fff'}}>
          <p>University of Shanghai for Science and Technology</p>
          <p>Bachelor of Arts / Events Management</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2014 - 2015' iconStyle={{background: '#2d3439', color: '#fff'}}>
          <p>University of Maryland College Park</p>
          <p>Master of Science / Supply Chain Management</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2015 - 2016' iconStyle={{background: '#2d3439', color: '#fff'}}>
          <p>WMGS (Shanghai) Co., Ltd.</p>
          <p>Replenishment Analyst</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--education' date='2016 - 2022' iconStyle={{background: '#2d3439', color: '#fff'}}>
          <p>Hangzhou Hongzhaochang Technology Co., Ltd.</p>
          <p>Technical Sales Specialist</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
  )
}

export default Resume