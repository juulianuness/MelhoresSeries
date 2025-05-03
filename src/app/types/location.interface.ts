export interface Location {
    id: string;
    title: string;
    description: string;
    content: string;
    schedules: Schedule[];

}
interface Schedule {
    hour: string;
}