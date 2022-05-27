import { UserListService } from './user-list.service';

describe('User List Service', () => {
    let service: UserListService;

    beforeEach(() => {
        service = new UserListService();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return a User List with 16 users', (done: DoneFn) => {
        service.getAll().then((response) => {
            expect(response.length).toBe(16);
            done(); //indica a Jasmine que ha acabado el test
        });
    }, 3000);       //el tercer param es un timeout, aquí 3secs; default es 5secs

    it('should not return an empty list'), (done: DoneFn) => {
        service.getAll().then((response) => {
            !expect(response.length).toBe(0);
            done();
        });
    }
});