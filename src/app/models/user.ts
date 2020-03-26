export interface User {
    id: number;
    name: string;
    address: string;
    username: string;
    contact: number;
    photoUrl: string;
}

export class MockData {

    fetchData() {
        return mockUserData;
    }
}

const mockUserData: User[] = [
{id: 1, name: 'ronilo',  address: 'fasdf',  username: 'fasdf',  contact: 41242, photoUrl: ''},
{id: 2, name: 'lebron',  address: 'rqwrqr', username: 'aasss',  contact: 41242, photoUrl: ''},
{id: 3, name: 'carmelo', address: 'fasd',   username: 'fsaff',  contact: 41242, photoUrl: ''},
{id: 4, name: 'iverson', address: 'fasdf',  username: 'asdfsa', contact: 41242, photoUrl: ''},
{id: 5, name: 'luca',    address: 'aadff',  username: 'asfffa', contact: 41242, photoUrl: ''},
{id: 6, name: 'trey',    address: 'asdf',   username: 'fasdff', contact: 41242, photoUrl: ''},
{id: 7, name: 'nognog',  address: 'dafas',  username: 'asdff',  contact: 41242, photoUrl: ''}
];
