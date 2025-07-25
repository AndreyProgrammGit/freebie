export const calcTotalWithCodeBonus = (data, code, bonus) => {
  const codeSale = data.discount_codes?.filter((item) => {
    if (item.code === +code) return item.sale;
  });
  const bonusSale = data.discount_bonuses?.filter((item) => {
    if (item.bonus === +bonus) return item.sale;
  });

  console.log(bonusSale);

  return {
    codeSale: +codeSale[0]?.sale || 0,
    bonusSale: +bonusSale[0]?.sale || 0,
  };
};
