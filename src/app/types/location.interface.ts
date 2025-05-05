export interface Location {
    id: number;
    title: string;
    description: string;
    
    schedules: Schedule[];

}
interface Schedule {
    hour: number;
}