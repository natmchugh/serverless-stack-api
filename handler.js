export const hello = async (event, context) => {
  return {
    statusCode: 200,
    body: `${(await message({ time: 1, copy: '────╔╗╔╗╔═╗╔╗╔╗╔══╗────'}))}
${(await message({ time: 1, copy: '────║╚╝║║╚╣║║║║║╔╗║────'}))}
${(await message({ time: 1, copy: '────║╔╗║║╔╣║╚╣╚╣╚╝║────'}))}
${(await message({ time: 1, copy: '════╩╩╩╩╩═╩╩═╩═╩══╩════'}))}
      		`
  };
};

const message = ({ time, ...rest }) => new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(`${rest.copy} `);
  }, time * 1)
);
