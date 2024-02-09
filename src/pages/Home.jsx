import { Table } from "../components/Table";

export function Home({ foydalanuvchilar, dispatch }) {
    return (
        <div>
            {/* Table */}
            <Table foydalanuvchilar={foydalanuvchilar} dispatch={dispatch} />
        </div>
    )
};