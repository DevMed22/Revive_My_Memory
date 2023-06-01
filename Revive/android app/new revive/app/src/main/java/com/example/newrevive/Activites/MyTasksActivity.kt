package com.example.newrevive.Activites

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.newrevive.databinding.ActivityLoginBinding
import com.example.newrevive.databinding.ActivityMyTasksBinding

class MyTasksActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMyTasksBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMyTasksBinding.inflate(layoutInflater)
        setContentView(binding.root)
    }
}