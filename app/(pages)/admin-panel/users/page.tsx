"use client";

import {
	Badge,
	Icon,
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";

import ContentBlock from "@/app/_components/AdminPanel/ContentBlock";
import { useEffect, useState } from "react";
import { getUsers } from "@/app/_services/api.service";
import { TUser } from "@/app/_utils/types";
import { DeleteIcon } from "@chakra-ui/icons";

export default function UsersPage() {
	const [users, setUsers] = useState<TUser[]>();

	useEffect(() => {
		getUsers().then((res) => setUsers(res?.data));
	}, []);

	if (users) {
		return (
			<ContentBlock>
				<TableContainer>
					<Table size="md" variant="unstyled">
						<Thead>
							<Tr>
								<Th>Аккаунт</Th>
								<Th>E-mail</Th>
								<Th>Права доступа</Th>
								<Th textAlign={"right"}>Действия</Th>
							</Tr>
						</Thead>
						<Tbody>
							{users.map((user) => (
								<Tr>
									<Td className="flex gap-2.5 items-center">
										<div className="w-7 h-7 bg-black rounded-full text-white flex-middle font-medium">
											?
										</div>
										{user.first_name || "Неизвестный"}
									</Td>
									<Td>{user.email}</Td>
									<Td>
										<Badge>
											{
												{ stupid: "Посетитель" }[
													user.role
												]
											}
										</Badge>
									</Td>
									<Td textAlign={"right"}>
										<DeleteIcon className=" text-[16px] cursor-pointer hover:opacity-60 [&_path]:fill-[#ff0000]" />
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</TableContainer>
			</ContentBlock>
		);
	}
}
