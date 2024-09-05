package taskManagementApplication.entity;

import java.util.Date;
import java.util.Objects;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
public class Task {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "TASK_ID_GEN")
	@SequenceGenerator(name = "TASK_ID_GEN", sequenceName = "TASK_ID_SEQ")
	private int id;
	
	@NotBlank
	private String name;
	
	@NotNull
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
	private Date date;
	
	@NotBlank
	private String performedBy;
	
	@NotNull
	private int durationInDays;
	
	@NotNull
	private double cost;
	
	public Task() {
		super();
	}

	public Task(int id, @NotBlank String name, @NotNull Date date, @NotBlank String performedBy,
			@NotNull int durationInDays, @NotNull double cost) {
		super();
		this.id = id;
		this.name = name;
		this.date = date;
		this.performedBy = performedBy;
		this.durationInDays = durationInDays;
		this.cost = cost;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getPerformedBy() {
		return performedBy;
	}

	public void setPerformedBy(String performedBy) {
		this.performedBy = performedBy;
	}

	public int getDurationInDays() {
		return durationInDays;
	}

	public void setDurationInDays(int durationInDays) {
		this.durationInDays = durationInDays;
	}

	public double getCost() {
		return cost;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}

	@Override
	public int hashCode() {
		return Objects.hash(cost, date, durationInDays, id, name, performedBy);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Task other = (Task) obj;
		return Double.doubleToLongBits(cost) == Double.doubleToLongBits(other.cost) && Objects.equals(date, other.date)
				&& durationInDays == other.durationInDays && id == other.id && Objects.equals(name, other.name)
				&& Objects.equals(performedBy, other.performedBy);
	}

	@Override
	public String toString() {
		return "Task [id=" + id + ", name=" + name + ", date=" + date + ", performedBy=" + performedBy
				+ ", durationInDays=" + durationInDays + ", cost=" + cost + "]";
	}
	
	

}
