package com.example.newrevive.Activites.sampledata

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "taskdata")
data class TaskDataEntity (
    @PrimaryKey(autoGenerate = true) val id: Long = 0,
    @ColumnInfo(name = "title" ) val title : String ="",
    @ColumnInfo(name = "date" ) val date : String="",
    @ColumnInfo(name = "time" ) val time : String="",
    @ColumnInfo(name = "isShow" ) val isShow : Int=0
)
