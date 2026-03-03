import {JwtPayload} from 'jwt-decode';

export interface AmelloJwtPayload extends JwtPayload {
  userId: string
}
