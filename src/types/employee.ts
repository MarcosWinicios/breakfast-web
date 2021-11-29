import { type } from 'os';
import { Item } from './item';

export type Employee = {
    id: number;
    name: string;
    cpf: string;
    items: Item[];
}

export type EmployeePage = {
    content?: Employee[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;
}