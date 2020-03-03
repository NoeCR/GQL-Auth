import environment from './environment';


if (process.env.NODE_ENV !== 'production') {
  const env = environment;
}

const SECRET_KEY = process.env.SECRET || 'L4x]Pg_*/x:x&8w';