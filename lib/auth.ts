// import { NextAuthOptions } from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';

// const authOptions: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email', type: 'text' },
//         password: { label: 'Password', type: 'password' },
//       },
//       async authorize(credentials) {
//         if (credentials?.email === 'admin@example.com') {
//           return { id: '1', name: 'Admin' };
//         }
//         return null;
//       },
//     }),
//   ],
//   pages: {
//     signIn: '/login',
//   },
// };

// export default authOptions;
