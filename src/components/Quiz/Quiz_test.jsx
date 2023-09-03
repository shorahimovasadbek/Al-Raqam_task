import React from 'react'
import './quiz.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { RingLoader } from 'react-spinners'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { Button } from '@mui/material'
import { Modal } from 'antd'
import {useNavigate} from 'react-router-dom'

export default function Quiz_test() {
  const [massivAll, setMassiv] = useState([])
  const [CorrectAndInCorrect, setCorrectAndIncorrect] = useState([])
  const [number, setNumber] = useState(0)
  const [TrueQuetion, setTrueQuetion] = useState([])
  const [FalseQuetion, setFalseQuetion] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const word = useParams()
  const navigate = useNavigate()
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    navigate('/')
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    navigate('/')
  };

  useEffect(() => {
    async function getInfo() {
      let response = await fetch(`${(word.word === 'eng') ? 'https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple' (word.word == 'sp') ? 'https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple' (word.word == 'fr') ? 'https://opentdb.com/api.php?amount=5&category=17&difficulty=easy&type=multiple' (word.word == 'gr') ? "https://opentdb.com/api.php?amount=5&category=17&difficulty=easy&type=multiple" (word.word == 'ja') ? 'https://opentdb.com/api.php?amount=5&category=28&difficulty=easy&type=multiple' : 'https://opentdb.com/api.php?amount=5&category=10&difficulty=easy&type=multiple' : 'https://opentdb.com/api.php?amount=5&category=17&difficulty=easy&type=multiple' : 'https://opentdb.com/api.php?amount=5&category=17&difficulty=easy&type=multiple' : 'https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple' : 'https://opentdb.com/api.php?amount=5&category=23&difficulty=easy&type=multiple'}`)
        .then(ress => {
          return ress.json()
        })
        .catch(err => {
          console.log(err)
        })
      setMassiv(response.results)
      let massiv = []
      for (let i = 0; i < response.results.length; i++) {
        let result = response.results[i].incorrect_answers.concat(response.results[i].correct_answer);
        for (let p = result.length - 1; p > 0; p--) {
          const j = Math.floor(Math.random() * (i + 1));
          [result[p], result[j]] = [result[j], result[p]];
        }
        const shuffledArray = [...result]

        massiv.push(shuffledArray)
      }
      let AnotherMassiv = []
      massiv.map((item, index) => {
        let ParentMassiv = []
        for (let k = 0; k < item.length; k++) {
          ParentMassiv.push({
            element: item[k],
          })
        }
        AnotherMassiv.push(ParentMassiv)
      })
      setCorrectAndIncorrect(AnotherMassiv)
    }
    getInfo()
  }, [])

  function NextQuetion() {
    if (number < CorrectAndInCorrect.length - 1) {
      setNumber(number + 1)
    } else {
      setNumber(0)
      showModal()
    }
  }

  function ChooseAnswers(item) {
    for (let i = 0; i < massivAll.length; i++) {
      if (massivAll[i].correct_answer === item) {
        let massiv1 = [...TrueQuetion]
        massiv1.push(item)
        setTrueQuetion(massiv1)
        console.log(massivAll[i].correct_answer, item, "teng");
        setTimeout(() => {
          NextQuetion()
        }, 800);
        return
      } else {
        let massiv = [...FalseQuetion]
        massiv.push(item)
        setFalseQuetion(massiv)
        console.log(massivAll[i].correct_answer, item, 'teng emas');
        setTimeout(() => {
          NextQuetion()
        }, 800);
        return
      }
    }

  }

  return (

    <div>
      {
        (CorrectAndInCorrect.length > 0) ?
          <div className='parent_test'>
            <>
              <Modal title="Youe Score" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                {TrueQuetion.length} / {FalseQuetion.length}
              </Modal>
            </>
            <h2 className='text-center mb-4'>Quiz test</h2>
            <div className='Parent_quiz'>
              <h4 className='quiz_test'>{massivAll[number].question}</h4>
            </div>
            {
              (CorrectAndInCorrect.length > 0) ? CorrectAndInCorrect[number].map((item, index) => {
                return (
                  <>
                    <p onClick={() => ChooseAnswers(item.element)} className={`child_test`}>{(item.element) ? item.element : 'Quetion not found'}</p>
                  </>
                )
              })
                :
                ''
            }
            <p className='text-center ms-5'><Button onClick={NextQuetion} variant='' className='border'>Next<MdOutlineKeyboardDoubleArrowRight /></Button></p>
          </div>
          :
          <div className='loader_ring'><RingLoader /></div>
      }
    </div>
  )
}


