export default interface Member {
  id: string;
  name: string;
  position: string;
  pictureUrl: string;
  superior?: Member;
}
