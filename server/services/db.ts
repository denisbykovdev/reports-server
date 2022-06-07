import { Sequelize } from "sequelize";

export const sequelizeConnection = new Sequelize(
    `mysql://report:e^qf-wt2g5wEGH_RWGE(F=WF-FEF75WT4H@92.205.21.129:3306/reports`,
    {
        dialect: "mysql",
        define: {
            timestamps: false,
            paranoid: true
        }
    }
);

export async function connect (): Promise<void> {
    try {
        await sequelizeConnection.sync({
            // alter: true
        })

        try {
            await sequelizeConnection.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    } catch (error) {
        console.error('Unable to sync with the database:', error);
    }
}