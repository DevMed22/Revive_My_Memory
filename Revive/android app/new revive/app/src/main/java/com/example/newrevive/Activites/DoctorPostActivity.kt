package com.example.newrevive.Activites

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.newrevive.databinding.ActivityDoctorPostBinding
import com.example.newrevive.databinding.ActivityLoginBinding

class DoctorPostActivity : AppCompatActivity() {
    private lateinit var binding: ActivityDoctorPostBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding= ActivityDoctorPostBinding.inflate(layoutInflater)
        setContentView(binding.root)
    }
}