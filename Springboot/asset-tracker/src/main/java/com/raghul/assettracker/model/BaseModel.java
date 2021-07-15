package com.raghul.assettracker.model;

import java.util.Date;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.Type;


@MappedSuperclass
public class BaseModel {
	
	@Column(name="created_on")
	private Date createdOn;
	@Column(name="updated_on")
	private Date updatedOn;
	@Column(name="is_active")
	@ColumnDefault("true")
	private Boolean isActive;
	@Column(name="created_by")
	@Type(type="uuid-char")
	private UUID createdBy;
	@Column(name="updated_by")
	@Type(type="uuid-char")
	private UUID updatedBy;
	public Date getCreatedOn() {
		return createdOn;
	}
	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}
	public Date getUpdatedOn() {
		return updatedOn;
	}
	public void setUpdatedOn(Date updatedOn) {
		this.updatedOn = updatedOn;
	}
	public Boolean getIsActive() {
		return isActive;
	}
	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}
	public UUID getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(UUID createdBy) {
		this.createdBy = createdBy;
	}
	public UUID getUpdatedBy() {
		return updatedBy;
	}
	public void setUpdatedBy(UUID updatedBy) {
		this.updatedBy = updatedBy;
	}
	
	@PrePersist
	public void prePersist() {
			this.updatedOn = new Date();
		
			this.createdOn = new Date();
		
	}
	
	@PreUpdate
	public void preUpdate() {
		this.updatedOn = new Date();
	}
	
	

}
