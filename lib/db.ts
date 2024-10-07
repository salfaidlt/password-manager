import Dexie, { type EntityTable } from 'dexie';

interface Password {
    id: number;
    label: string;
    description: string;
    password:  string
}

const db = new Dexie('PasswordsDatabase') as Dexie & {
    passwords: EntityTable<Password, 'id'>;
}

db.version(1).stores({
    passwords: '++id, label, description, password'
})

export type { Password }
export { db }