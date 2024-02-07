import { Table } from "../components/Table";

export function Home({ foydalanuvchilar }) {
    return (
        <div>
            {/* Table */}
            <Table foydalanuvchilar={foydalanuvchilar} />
        </div>
    )
};