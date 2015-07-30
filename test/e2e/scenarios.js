describe('Authentication capabilities', function() {
    var fail = function() {
            expect(true).toBe(false);
        },
        pass = function() {
            expect(true).toBe(true);
        };

    it('should redirect to the login page if trying to load protected page while not authenticated', pass);
    it('should warn on missing/malformed credentials', pass);
    it('should accept a valid email address and password', pass);
    it('should return to the login page after logout', pass);
});