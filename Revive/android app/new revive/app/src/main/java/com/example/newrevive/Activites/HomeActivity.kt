package com.example.newrevive.Activites

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.newrevive.databinding.ActivityHomeBinding
import com.example.newrevive.databinding.ActivityMainBinding

class HomeActivity : AppCompatActivity() {
    private lateinit var binding: ActivityHomeBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding= ActivityHomeBinding.inflate(layoutInflater)
        setContentView(binding.root)


        binding.MyTasks.setOnClickListener {
            startActivity(Intent(this, MyTasksActivity::class.java))

        }
        binding.doctorsPost.setOnClickListener {
            startActivity(Intent(this, DoctorPostActivity::class.java))

        }
    }
}