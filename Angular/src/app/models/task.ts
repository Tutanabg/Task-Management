export class Task {
  
	id: number;
	name: string;
	date: Date;
	performedBy: string;
	durationInDays: number;
	cost: number;

  constructor(id: number, name: string, date: Date, performedBy: string, durationInDays: number, cost: number){
    this.id = id;
    this.name = name;
    this.date = date;
    this.performedBy = performedBy;
    this.durationInDays = durationInDays;
    this.cost = cost
  }

  getId(): number {
		return this.id;
	}

	setId(id: number) {
		this.id = id;
	}

  getName(): string {
		return this.name;
	}

	setName(name: string) {
		this.name = name;
	}

  getDate(): Date{
    return this.date;
  }

  setDate(date: Date){
    this.date = date;
  }

  getPerformedBy(): string {
		return this.performedBy;
	}

	setPerformedBy(performedBy: string) {
		this.performedBy = performedBy;
	}

  getDurationInDays(): number {
		return this.durationInDays;
	}

	setDurationInDays(durationInDays: number) {
		this.durationInDays = durationInDays;
	}

  getCost(): number {
		return this.cost;
	}

	setCost(cost: number) {
		this.cost = cost;
	}
}
