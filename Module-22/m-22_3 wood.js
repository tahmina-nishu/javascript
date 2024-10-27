function woodQuantity(chair, table, bed)
{
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const allChairWood = chair * perChairWood;
    const allTableWood = table * perTableWood;
    const allBedWood = bed * perBedWood;

    const total = allChairWood + allTableWood + allBedWood;

    return total;
}

const wood = woodQuantity(0, 0, 1);
console.log(wood);