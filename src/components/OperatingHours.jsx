import React, { useState, useEffect } from 'react';

const OperatingHours = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const hours = [
    { day: 'Senin - Sabtu', time: '08:00 - 18:00' },
    { day: 'Minggu', time: '09:00 - 16:00' },
    { day: 'Hari Libur', time: 'Tutup' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const hour = now.getHours();

    let open = false;
    
    if (day >= 1 && day <= 6) { // Monday to Saturday
      open = hour >= 8 && hour < 18;
    } else if (day === 0) { // Sunday
      open = hour >= 9 && hour < 16;
    }

    setIsOpen(open);
  }, [currentTime]);

  const formatTime = (date) => {
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className="operating-hours">
      <div className="store-status">
        <div className={`status-indicator ${isOpen ? 'open' : 'closed'}`}>
          <div className="status-dot"></div>
          <span className="status-text">
            {isOpen ? 'Toko Buka' : 'Toko Tutup'}
          </span>
        </div>
        <div className="current-time">
          {formatTime(currentTime)} WIB
        </div>
      </div>
      
      <div className="hours-list">
        <h4>Jam Operasional</h4>
        {hours.map((schedule, index) => (
          <div key={index} className="hour-item">
            <span className="day">{schedule.day}</span>
            <span className="time">{schedule.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OperatingHours;
