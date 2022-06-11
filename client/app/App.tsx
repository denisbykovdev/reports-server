import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react';
import { IArea } from '../../server/@types/IArea';
import { IProblem } from '../../server/@types/IProblem';
import { IReport } from '../../server/@types/IReport';
import { IStandart } from '../../server/@types/IStandart';

const url = `https://reports-server.herokuapp.com`;
// const url = `http://localhost:8000`

export const App = () => {
    const [readedReports, setReports] = useState();
    const [readedAreas, setAreas] = useState();
    const [readedProblems, setProblems] = useState();
    const [readedStandarts, setStandarts] = useState();

    useEffect(() => {
        (
            async () => {
                const { data: reports } = await axios.get(
                    `${url}/reports`
                );

                console.log(
                    `--- client/reports:`,
                    reports
                );

                setReports(reports);

                const { data: areas } = await axios.get(
                    `${url}/areas`
                );

                console.log(
                    `--- client/areas:`,
                    areas
                );

                setAreas(areas);

                const { data: problems } = await axios.get(
                    `${url}/problems`
                );

                console.log(
                    `--- client/problems:`,
                    problems
                );

                setProblems(problems);

                const { data: standarts } = await axios.get(
                    `${url}/standarts`
                );

                console.log(
                    `--- client/standarts:`,
                    standarts
                );

                setStandarts(standarts);
            }
        )();
    }, []);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%'
        }}>
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
                                    {
                                        problem.image &&
                                        problem.image.length > 0 &&
                                        problem.image.map(
                                            (im, i) =>
                                                <img
                                                    src={`data:image/png;base64, ${problem.image}`}
                                                    style={{
                                                        width: 300,
                                                        height: 300,
                                                        objectFit: 'contain'
                                                    }}
                                                />
                                        )
                                    }
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
                                            width: 300,
                                            height: 300,
                                            objectFit: 'contain'
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
