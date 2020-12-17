import React from 'react'
import {ContainerDatas, FormData} from './style'

export default () => 
   
   ( 
    <div className="container">
        <FormData>
            <ContainerDatas>
                <h2>Entradas Fixas</h2>
                <div>
                    <label>Salario (liquido)</label>
                    <input type="number" placeholder="ex: R$ 1.200,00"/>
                </div>
                <div>
                    <label>Beneficio extra 01</label>
                    <input type="number" placeholder="ex: R$ 1.200,00"/>
                </div>
                <div>
                    <label>Beneficio extra 02)</label>
                    <input type="number" placeholder="ex: R$ 1.200,00"/>
                </div>
            </ContainerDatas>

            <ContainerDatas>
                <h2>Saídas Fixas</h2>
                <div>
                    <label>Aluguel</label>
                    <input type="number" placeholder="caso necessario, inclua o valor do condominio"/>     
                </div>
                <div>
                    <label>Consumo mensal de agua</label>
                    <input type="number" placeholder="Valor aproximado"/>     
                </div>
                <div>
                    <label>Consumo mensal de luz</label>
                    <input type="number" placeholder="Valor aproximado"/>     
                </div>
                <div>
                    <label>Consumo mensal alimentação</label>
                    <input type="number" placeholder="Valor aproximado"/>     
                </div>
                <div>
                    <label>Internet</label>
                    <input type="number" placeholder="Valor aproximado"/>     
                </div>
                <div>
                    <label>Dia a Dia</label>
                    <input type="number" placeholder="Valor aproximado"/>     
                </div>
            </ContainerDatas>
        </FormData>
    </div>
   )
