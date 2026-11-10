// Central map of Unsplash placeholder images used across Destinara.
// Every visual references a key from this map so images can be swapped in one place.

const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

export const IMG = {
  // Verified
  teotihuacanBalloons: u("photo-1747607176057-175b357ef4ab"),
  teotihuacanPyramid: u("photo-1643177571935-5204362103fa"),
  teotihuacanAerial: u("photo-1773724158166-4619e629d6f4"),
  chichenItza: u("photo-1787664375368-0f3b3db5f6bd"),
  yucatanCenote: u("photo-1719941463960-f3310fe64e46"),
  guanajuato: u("photo-1528322501932-a67493e17a3e"),
  guanajuatoHills: u("photo-1658778177301-0f71c17624ed"),
  guanajuatoAerial: u("photo-1578451555390-b115f419f7ac"),
  cdmx: u("photo-1547686669-9a8cb1a22d91"),
  cdmxBellasArtes: u("photo-1573485905785-f8f87e7bf82c"),
  sanMiguel: u("photo-1717654543196-4d6826ec4bb8"),

  // Destination-specific
  monterrey: u("photo-1779230375765-cb8d8bf9f71c"),
  rivieraMaya: u("photo-1775159363607-c78429fe81af"),
  hacienda: u("photo-1542301983-6c499350e3fb"),
  atelierNotebook: u("photo-1516546453174-5e1098a4b4af"),
  mexicanFood: u("photo-1700625916627-16ad4fb0553c"),
  oaxaca: u("photo-1686448921254-b326a7914d2f"),
  taxco: u("photo-1674216436927-8d5475f83eeb"),
  forestLake: u("photo-1783295542530-ae944cd05eae"),
  waterfall: u("photo-1783473855377-5dc01c0fbd80"),
  whale: u("photo-1568430462989-44163eb1752f"),
  pottery: u("photo-1775152935644-317fc6d3bb71"),
  hotSprings: u("photo-1712367013423-a98d93900054"),
  tepoztlan: u("photo-1787078989222-b1fcba00962c"),
  cave: u("photo-1764347120384-b2e7197e4e97"),
  flowerCarpet: u("photo-1767191519622-3dd7ce31ec1d"),
  huasteca: u("photo-1755467348775-0831939faac1"),
  jungleCoast: u("photo-1781901397248-b696093151c1"),
  sunflowers: u("photo-1776445602573-0cc8680b4d0a"),
  cholula: u("photo-1657691584029-6380d568a48e"),
  gulfBeach: u("photo-1771945484043-3a17fbf57a4b"),
  fireflies: u("photo-1763953239955-ff27e74e7e84"),
  monarch: u("photo-1779235475756-c8109adb5ec4"),
  seaTurtle: u("photo-1779887184038-df7ebd258412"),
  papelPicado: u("photo-1775176295453-9a94af0ca6dd"),
  agave: u("photo-1706888135824-20ec9010b7bc"),
  burger: u("photo-1568901346375-23c9450c58cd"),
  pinkWall: u("photo-1780094188585-cea7ea53c821"),
} as const;

export type ImageKey = keyof typeof IMG;
