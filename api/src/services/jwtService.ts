'use strict';

import * as jwt from 'jsonwebtoken';

class jwtService {
  secret: string;
  constructor() {
    this.secret = 'tssss...'
  }

  public createToken(id, role) {
    const payload = { id, role };
    const expired = (role === 'admin' || role === 'superadmin') ? '2h' : '5d';
    return jwt.sign(
      payload,
      this.secret, {
        expiresIn: expired
      });
  }

  public decodeToken(token, callback) {
    jwt.verify(token, this.secret, callback);
  }
};

export default new jwtService();
