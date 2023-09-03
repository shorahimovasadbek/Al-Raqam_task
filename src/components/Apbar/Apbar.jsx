import React, { useState } from 'react';
import './apbar.css'
import { VscVmActive } from 'react-icons/vsc'
import { MdIncompleteCircle } from 'react-icons/md'
import { MdPlayLesson } from 'react-icons/md'
// import { MdArrowCircleLeft, MdArrowCircleRight } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';

function Apbar() {
  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate()

  function toggleCollapsed(e) {
    if (e.key === 'close') {
      setCollapsed(!collapsed);
    }else if(e.key === "All"){
      navigate('/')
    }else if(e.key === "Active"){
      navigate("/active")
    }else if(e.key === 'Completed'){
      navigate('/completed')
    }
  };

  return (
    <div className="menu" style={{ width: '15%', position: 'fixed' }}>
      <Menu
        mode="inline"
        theme='dark'
        style={{ backgroundColor: "#000", display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#fff', fontWeight: '500', height: '100vh', fontSize: '17px', paddingTop: '30vh' }}
        inlineCollapsed={collapsed}
        onClick={toggleCollapsed}
        items={[
          // { key: 'close', icon: (collapsed) ? <MdArrowCircleLeft style={{ fontSize: "20px", marginRight: '5px' }} /> : <MdArrowCircleRight style={{ fontSize: "20px", marginRight: '5px' }} /> },
          { label: "All", key: "All", icon: <MdPlayLesson style={{ fontSize: "25px", marginRight: '5px' }} /> },
          { label: "Active", key: "Active", icon: <VscVmActive style={{ fontSize: "25px", marginRight: '5px' }} /> },
          { label: "Completed", key: "Completed", icon: <MdIncompleteCircle style={{ fontSize: "25px", marginRight: '5px' }} /> }
        ]}
      />
      
    </div>
  );
};

export default Apbar;