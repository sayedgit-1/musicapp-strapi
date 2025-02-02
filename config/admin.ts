export default ({ env }) => ({
  auth: {
    secret: process.env.ADMIN_JWT_SECRET || 'IX0X2Js22ZG81LnoR7R9Qz7/8aZM+FucCCYchCaDuo=',
  },
  apiToken: {
    salt: process.env.API_TOKEN_SALT || 'bGSfnByXlktSIpn7rr0gTg4L+IsTRtdHsTXQfRemDjM=',
  },
  transfer: {
    token: {
      salt: process.env.TRANSFER_TOKEN_SALT || 'MdlIglclzhjJGA7t246vKLkpW7d5VqmSJYop+srPiX0=',
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});

