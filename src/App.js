import React, { useState } from 'react';
import './App.css';

function App() {
  const [screen, setScreen] = useState('welcome');
  const [userName, setUserName] = useState('');
  const [avatar, setAvatar] = useState({
    face: 0,
    color: '#00F5FF',
    skills: [],
    name: ''
  });

  const heroes = [
    { id: 1, name: 'ФОКУС', skill: 'Концентрация', emoji: '🎯', color: '#00F5FF', unlocked: true },
    { id: 2, name: 'ТОР', skill: 'Уверенность', emoji: '💪', color: '#FFD700', unlocked: false },
    { id: 3, name: 'ЭМПАТ', skill: 'Эмоции', emoji: '💜', color: '#FF00FF', unlocked: false },
    { id: 4, name: 'ИГНИС', skill: 'Мотивация', emoji: '🔥', color: '#FF4444', unlocked: false },
    { id: 5, name: 'ДЗЕН', skill: 'Стойкость', emoji: '🛡️', color: '#888888', unlocked: false },
  ];

  const neonText = {
    textShadow: '0 0 10px #00F5FF, 0 0 20px #00F5FF, 0 0 40px #00F5FF'
  };

  const neonTextPink = {
    textShadow: '0 0 10px #FF00FF, 0 0 20px #FF00FF, 0 0 40px #FF00FF'
  };

  // ЭКРАН 1: Приветствие
  const WelcomeScreen = () => (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a0033 0%, #000 50%, #001a33 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Фоновые эффекты */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '200px',
        height: '200px',
        background: '#FF00FF',
        borderRadius: '50%',
        filter: 'blur(100px)',
        opacity: 0.3
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '200px',
        height: '200px',
        background: '#00F5FF',
        borderRadius: '50%',
        filter: 'blur(100px)',
        opacity: 0.3
      }} />

      {/* Контент */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <div style={{ fontSize: '80px', marginBottom: '20px', filter: 'drop-shadow(0 0 20px #00F5FF)' }}>
          🧠⚡
        </div>
        
        <h1 style={{ ...neonText, color: '#00F5FF', fontSize: '36px', margin: '0 0 10px 0' }}>
          ПРОКАЧАЙ
        </h1>
        <h1 style={{ ...neonTextPink, color: '#FF00FF', fontSize: '36px', margin: '0 0 20px 0' }}>
          СВОЙ МОЗГ
        </h1>
        
        <p style={{ color: '#888', marginBottom: '30px', maxWidth: '300px' }}>
          Собери команду героев. Освой суперсилы. 
          <span style={{ color: '#00F5FF' }}> Стань легендой.</span>
        </p>

        {/* Герои */}
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '40px' }}>
          {heroes.map(h => (
            <div key={h.id} style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'rgba(0,0,0,0.5)',
              border: `2px solid ${h.color}`,
              boxShadow: `0 0 10px ${h.color}88`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}>
              {h.emoji}
            </div>
          ))}
        </div>

        {/* Кнопка */}
        <button
          onClick={() => setScreen('problems')}
          style={{
            background: 'linear-gradient(135deg, #00F5FF, #FF00FF)',
            border: 'none',
            padding: '16px 40px',
            borderRadius: '30px',
            color: '#000',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 0 30px #00F5FF66'
          }}
        >
          НАЧАТЬ ИГРУ 🚀
        </button>

        {/* Статистика */}
        <div style={{ display: 'flex', gap: '30px', marginTop: '40px', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#00F5FF', fontSize: '24px', fontWeight: 'bold' }}>2.5K+</div>
            <div style={{ color: '#666', fontSize: '12px' }}>игроков</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#FF00FF', fontSize: '24px', fontWeight: 'bold' }}>4.9★</div>
            <div style={{ color: '#666', fontSize: '12px' }}>рейтинг</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: '#FFD700', fontSize: '24px', fontWeight: 'bold' }}>7 дней</div>
            <div style={{ color: '#666', fontSize: '12px' }}>до результата</div>
          </div>
        </div>
      </div>
    </div>
  );

  // ЭКРАН 2: Проблемы
  const ProblemsScreen = () => (
    <div style={{
      minHeight: '100vh',
      background: '#000',
      padding: '20px',
      color: '#fff'
    }}>
      <button onClick={() => setScreen('welcome')} style={{
        background: 'none',
        border: 'none',
        color: '#00F5FF',
        fontSize: '24px',
        cursor: 'pointer',
        marginBottom: '20px'
      }}>←</button>

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div style={{ fontSize: '50px', marginBottom: '10px' }}>😤</div>
        <h2 style={{ ...neonTextPink, color: '#FF4444', margin: 0 }}>Знакомо?</h2>
      </div>

      {/* Проблемы */}
      {[
        { text: 'Волнуешься перед выступлением до трясучки', icon: '😰' },
        { text: 'Знаешь ответ, но боишься поднять руку', icon: '🙋' },
        { text: 'Откладываешь всё на "завтра"', icon: '📅' },
        { text: 'Не можешь сосредоточиться', icon: '🤯' },
        { text: 'Психуешь из-за мелочей', icon: '💢' }
      ].map((item, i) => (
        <div key={i} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          padding: '15px',
          background: 'rgba(255,68,68,0.1)',
          border: '1px solid rgba(255,68,68,0.3)',
          borderRadius: '12px',
          marginBottom: '10px'
        }}>
          <span style={{ fontSize: '24px' }}>{item.icon}</span>
          <span style={{ color: '#ccc', flex: 1 }}>{item.text}</span>
          <span style={{ color: '#FF4444' }}>✗</span>
        </div>
      ))}

      {/* Решение */}
      <div style={{
        textAlign: 'center',
        padding: '20px',
        background: 'linear-gradient(135deg, rgba(0,245,255,0.1), rgba(255,0,255,0.1))',
        borderRadius: '16px',
        marginTop: '20px',
        border: '1px solid rgba(0,245,255,0.3)'
      }}>
        <p style={{ color: '#888', marginBottom: '10px' }}>А что если...</p>
        <h3 style={{ margin: 0, fontSize: '20px' }}>
          Ты мог бы <span style={{ color: '#00F5FF', ...neonText }}>управлять</span> этим?
        </h3>
      </div>

      <button
        onClick={() => setScreen('heroes')}
        style={{
          width: '100%',
          marginTop: '20px',
          background: 'linear-gradient(135deg, #00F5FF, #FF00FF)',
          border: 'none',
          padding: '16px',
          borderRadius: '12px',
          color: '#000',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        ПОКАЖИ КАК →
      </button>
    </div>
  );

  // ЭКРАН 3: Герои
  const HeroesScreen = () => (
    <div style={{
      minHeight: '100vh',
      background: '#000',
      padding: '20px',
      color: '#fff'
    }}>
      <button onClick={() => setScreen('problems')} style={{
        background: 'none',
        border: 'none',
        color: '#00F5FF',
        fontSize: '24px',
        cursor: 'pointer',
        marginBottom: '20px'
      }}>←</button>

      <h2 style={{ textAlign: 'center', ...neonText, color: '#00F5FF', marginBottom: '10px' }}>
        5 ГЕРОЕВ
      </h2>
      <p style={{ textAlign: 'center', color: '#888', marginBottom: '30px' }}>
        Каждый научит тебя своей суперсиле
      </p>

      {heroes.map(hero => (
        <div key={hero.id} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          padding: '15px',
          background: 'rgba(255,255,255,0.05)',
          border: `2px solid ${hero.color}66`,
          borderRadius: '12px',
          marginBottom: '10px'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '12px',
            background: `${hero.color}22`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px'
          }}>
            {hero.emoji}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ color: hero.color, fontWeight: 'bold' }}>{hero.name}</div>
            <div style={{ color: '#888', fontSize: '14px' }}>Мастер: {hero.skill}</div>
          </div>
          <div style={{ color: '#666', fontSize: '20px' }}>
            {hero.unlocked ? '🔓' : '🔒'}
          </div>
        </div>
      ))}

      <div style={{
        textAlign: 'center',
        padding: '20px',
        background: 'rgba(0,245,255,0.1)',
        borderRadius: '16px',
        marginTop: '20px',
        border: '1px solid rgba(0,245,255,0.3)'
      }}>
        <p style={{ color: '#888', margin: 0 }}>
          🎮 Пройди всех 5 героев и создай <strong style={{ color: '#FF00FF' }}>своего уникального персонажа</strong>
        </p>
      </div>

      <button
        onClick={() => setScreen('start')}
        style={{
          width: '100%',
          marginTop: '20px',
          background: 'linear-gradient(135deg, #00F5FF, #FF00FF)',
          border: 'none',
          padding: '16px',
          borderRadius: '12px',
          color: '#000',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        НАЧАТЬ ПРОКАЧКУ 🚀
      </button>
    </div>
  );

  // ЭКРАН 4: Начало уровня
  const StartScreen = () => (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #001a33 0%, #000 50%, #1a0033 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '300px',
        height: '300px',
        background: '#00F5FF',
        borderRadius: '50%',
        filter: 'blur(120px)',
        opacity: 0.3
      }} />

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <div style={{ fontSize: '80px', marginBottom: '20px', filter: 'drop-shadow(0 0 30px #00F5FF)' }}>
          🎯
        </div>
        
        <h1 style={{ ...neonText, color: '#00F5FF', fontSize: '32px', margin: '0 0 10px 0' }}>
          УРОВЕНЬ 1
        </h1>
        <h2 style={{ color: '#888', fontSize: '24px', margin: '0 0 30px 0' }}>
          ФОКУС
        </h2>

        <div style={{
          padding: '20px',
          background: 'rgba(0,245,255,0.1)',
          borderRadius: '16px',
          border: '1px solid rgba(0,245,255,0.3)',
          marginBottom: '30px',
          maxWidth: '300px'
        }}>
          <p style={{ color: '#ccc', margin: 0, fontStyle: 'italic' }}>
            "Привет! Я — Фокус. Готов научиться управлять своим вниманием и страхом?"
          </p>
        </div>

        <button
          onClick={() => setScreen('welcome')}
          style={{
            background: 'linear-gradient(135deg, #00F5FF, #0088FF)',
            border: 'none',
            padding: '16px 40px',
            borderRadius: '30px',
            color: '#000',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 0 30px #00F5FF66'
          }}
        >
          НАЧАТЬ →
        </button>

        <p style={{ color: '#666', fontSize: '12px', marginTop: '30px' }}>
          Демо-версия приложения
        </p>
      </div>
    </div>
  );

  return (
    <div style={{ maxWidth: '480px', margin: '0 auto', minHeight: '100vh' }}>
      {screen === 'welcome' && <WelcomeScreen />}
      {screen === 'problems' && <ProblemsScreen />}
      {screen === 'heroes' && <HeroesScreen />}
      {screen === 'start' && <StartScreen />}
    </div>
  );
}

export default App;