import countDone from "../../functions/countDone"
import evaluateProgess from "../../functions/evaluateProgress"
import moment from "moment"
import 'moment/locale/pt-br'
import styled from "styled-components"
import { useState, useEffect } from "react"
import TodayHabit from "../TodayCard"

function Today({ token, habits }) {
    
    const [update, setUpdate] = useState(['no']) //terá o valor alterado via callback em TodayHabit

    const doneHabits = countDone(habits)
    const percentProgress = evaluateProgess(doneHabits, habits.length)
    const currentDate = moment().format('LL')

    return <>
        <Main>
            <ViewLabel>
                {currentDate}
                <SubLabel>{doneHabits === 0 ? 'Nenhum hábito concluído ainda' :
                    `Você concluiu ${percentProgress}% dos seus hábitos hoje`}
                </SubLabel>
            </ViewLabel>

            {
                habits.map(todayHabit => <TodayHabit
                    key={todayHabit.id}
                    id={todayHabit.id}
                    name={todayHabit.name}
                    done={todayHabit.done}
                    currentSequence={todayHabit.currentSequence}
                    highestSequence={todayHabit.highestSequence}
                    token={token}
                    update={setUpdate} 
                    />)
            }

        </Main>

    </>
}


const Main = styled.main`
padding: 20px;
margin-top: 90px;
margin-bottom: 70px;
`

const ViewLabel = styled.h1`
color: #FF3B30;
font-size: 18px;
font-weight: 700;
margin-bottom: 20px;
`
const SubLabel = styled.p`
color: gray;
font-size: 16px;
font-weight: 500;
margin-top: 4px;
`



export default Today