import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import { IArea } from '../../server/@types/IArea';
import { IProblem } from '../../server/@types/IProblem';
import { IReport } from '../../server/@types/IReport';
import { IStandart } from '../../server/@types/IStandart';

export const App = () => {
    const [readedReports, setReports] = useState();
    const [readedAreas, setAreas] = useState();
    const [readedProblems, setProblems] = useState();
    const [readedStandarts, setStandarts] = useState();

    useEffect(() => {
        (
            async() => {
                const { data: reports } = await axios.get(
                    `http://localhost:8000/reports`
                );

                console.log(
                    `--- client/reports:`,
                    reports
                );

                setReports(reports);

                const { data: areas } = await axios.get(
                    `http://localhost:8000/areas`
                );

                console.log(
                    `--- client/areas:`,
                    areas
                );

                setAreas(areas);

                const { data: problems } = await axios.get(
                    `http://localhost:8000/problems`
                );

                console.log(
                    `--- client/problems:`,
                    problems
                );

                setProblems(problems);

                const { data: standarts } = await axios.get(
                    `http://localhost:8000/standarts`
                );

                console.log(
                    `--- client/standarts:`,
                    standarts
                );

                setStandarts(standarts);
            }
        )();
    }, []);

    return(
        <div className='app-container'>
            reports server/data:
            <Suspense fallback={<span>Loading ...</span>}>
                {
                    readedReports && (readedReports as any).map(
                        (report: IReport, i: number) => 
                            <div key={i}>
                                <Suspense fallback={<span>Loading ...</span>}>
                                    <div>
                                        report: {report.report_adress}
                                        {JSON.stringify(report.report_adress)}
                                    </div>
                                    <div>
                                        {JSON.stringify(report.areas)}
                                    </div>
                                    <div>
                                        {JSON.stringify(report.notes)}
                                    </div>
                                </Suspense> 
                            </div>
                    )
                }
                {
                    readedAreas && (readedAreas as any).map(
                        (area: IArea, i: number) => 
                            <div key={i}>
                                <Suspense fallback={<span>Loading ...</span>}>
                                    <div>
                                        {JSON.stringify(area.area_name)}
                                    </div>
                                    <div>
                                        {JSON.stringify(area.problems)}
                                    </div>
                                    <div>
                                        {JSON.stringify(area.samples)}
                                    </div>
                                </Suspense> 
                            </div>
                    )
                }
                {
                    readedProblems && (readedProblems as any).map(
                        (problem: IProblem, i: number) => 
                            <div key={i}>
                                <Suspense fallback={<span>Loading ...</span>}>
                                    <div>
                                        {JSON.stringify(problem.name)}
                                    </div>
                                    <div>
                                        {JSON.stringify(problem.standarts)}
                                    </div>
                                    <img
                                        src={`data:image/png;base64, ${problem.image}`}
                                        style={{
                                            width: 100,
                                            height: 100
                                        }}
                                    />
                                </Suspense> 
                            </div>
                    )
                }
                {
                    readedStandarts && (readedStandarts as any).map(
                        (standart: IStandart, i: number) => 
                            <div key={i}>
                                <Suspense fallback={<span>Loading ...</span>}>
                                    <div>
                                        {JSON.stringify(standart.id)}
                                    </div>
                                    <img
                                        src={`data:image/png;base64, ${standart.image}`}
                                        style={{
                                            width: 100,
                                            height: 100
                                        }}
                                    />
                                </Suspense> 
                            </div>
                    )
                }
            </Suspense>
        </div>
    )
};
